const monster = {
    isAlive: true,
    hitPoints: 30,
    lastDamageTaken: 0,
    respawn: function() {
        this.Alive = true;
        this.hitPoints = 30;
        this.lastDamageTaken = 0; 
    },
    calculateRawDamage: function() {
        return Math.floor(Math.random() * 6) + 2;
        
    },
    takeDamage: function(enemy) {
        const currentDamage = enemy
        this.hitPoints = this.hitPoints - currentDamage;
        this.lastDamageTaken = currentDamage;
        if(this.hitPoints < 0){
            this.isAlive = false;
        }
    },
    
};