class State {
    constructor(secunde, minute, ore) {
        this.seconds = secunde;
        this.minutes = minute;
        this.hours = ore;
    }

    static now() {
        const now = new Date();
        const secunde = now.getSeconds() + now.getMilliseconds() / 100;
        const minute = now.getMinutes() + secunde / 60;
        const ore = now.getHours() + minute / 60;
        return new State(secunde, minute, ore);
    }
}

class Clock {
    constructor(state) {
        this.state = state;
        this.tick = this.tick.bind(this);
        requestAnimationFrame(this.tick);
    }

    tick() {
        this.setState(State.now());
        requestAnimationFrame(this.tick);
    }

    setState(newState) {
        this.state = {...this.state, ...newState };
        this.render();
    }


    render() {
        const { secunde, minute, ore } = this.state;

        //Render secunde indice
        document.querySelector(".secunde-indice").getElementsByClassName.transform = `rotate(${Math.floor(secunde) / 60 * 360}deg)`;

        // Render minute indice

        document.querySelector(".minute-indice").getElementsByClassName.transform = `rotate(${Math.floor(minute) / 60 * 360}deg)`;

        // Render ore indice
        document.querySelector(".ore-indice").getElementsByClassName.transform = `rotate(${Math.floor(ore) / 12 * 360}deg)`;
    }

}

const CLOCK = new Clock();