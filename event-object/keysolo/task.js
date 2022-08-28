class Game {
  constructor(container) {
    this.container = container;
    this.startElement = container.querySelector('#start');
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.currentWord = null;
    this.timerId = null;

    this.wordElement.style.display = 'none';
    this.start(); 
  }

  start(){
    this.startElement.onclick = () => {
      this.startElement.style.display = 'none'; 
      this.wordElement.style.display = 'block';
      this.setNewWord();
      this.registerEvents();
    }
  }
  reload() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.wordElement.style.display = 'none';
    this.startElement.style.display = 'block';
    clearTimeout(this.timerId);
    this.timerId = null;
    document.removeEventListener('keydown', this.callListener);
  }

  registerEvents() {
    this.callListener = this.listener.bind(this);
    document.addEventListener('keydown', this.callListener);
}
  listener(event){
      if (event.shiftKey || event.altKey || event.ctrlkey) {
        console.log('Горячие главиши');
        return;
      }
      if((this.currentSymbol.textContent).toLowerCase() === (event.key).toLowerCase()){
        this.success();
      }else{
        this.fail();
      }
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }
    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reload();
      return;
    }
      this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reload();
      return;
    }
      this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.currentWord = word;
    this.renderWord(word);

    clearTimeout(this.timerId);
    this.timerId = null;
    let callThis = this.fail.bind(this);
    if(this.timerId === null){
      let second = 1000 * this.currentWord.length;
      this.timerId = setTimeout(callThis, second);
    }
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'программист'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  return word;
  }
}

new Game(document.getElementById('game'));

