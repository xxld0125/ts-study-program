// 定义ScorePanel类
class ScorePanel {
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;

    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';

        // 判断是否满足升级条件
        if (this.score % 10 === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}

export default ScorePanel;