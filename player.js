const player = {
    isAlive: true,
    hitPoints: 100,
    level: 1,
    lastDamageTaken: 0,
    baseAttackDamage: 5,
    levelUp: function(){
        this.level = this.level + 1;
        this.hitPoints = this.hitPoints + 5;
        this.lastDamageTaken = 0;
        this.baseAttackDamage = this.baseAttackDamage * (20/100); 
    },
    fight: function(enemy) {
        const currentDamage = enemy.calculateRawDamage();
        this.hitPoints = this.hitPoints - currentDamage;
        this.lastDamageTaken = currentDamage
        if(this.hitPoints < 0){
            this.isAlive = false;
        }
        enemy.takeDamage(this.calculateRawDamage())
    },
    calculateRawDamage: function() {
        return Math.floor(Math.random() * 6);

    }

}