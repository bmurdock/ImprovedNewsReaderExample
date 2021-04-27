
class Character {
    constructor()
    {
        this.hitpoints = 100;
    }
    static disclaimer = "This should not change.";

    setHitpoints = (val) =>
    {
        this.hitpoints = val;
    }
    gethitpoints = () =>
    {
        return this.hitpoints();
    }
    getDisclaimer = () =>
    {
        console.log(this.disclaimer);
    }
}


class Warrior extends Character {
    constructor(props)
    {
        super(props)
    }
}

const brian = new Character();
const dave = new Character();

dave.setHitpoints(33);

console.log('brian: ', brian);
console.log('dave: ', dave);
console.log(brian.disclaimer);
brian.getDisclaimer();