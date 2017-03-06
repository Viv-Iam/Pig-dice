# _PIG DICE GAME_
## By _Vivian Opondoh_
### Description
###### This web-app gives users option of playing _Pig Dice_ against another player.
# Specs

| Behavior                    |Input                   |Output
|-----------------------|:------------------------:|---------------------------:|
| When a player clicks ROLL button it should randomly generate numbers between one and six. | Click ROLL button. | Random number between 1-6. |
| If a player rolls 1, they score ZERO and their turn ends. | ROLL = 1 | Turn Score = 0 / Turn ends. |
| If a player rolls any other number, it is added to their Turn Score and their turn continues. | ROLL = 5 | Turn Score = 5 / Turn continues. |
| If a player decides to HOLD, their Turn Total is added to their Total Score, and it becomes the next players turn. | HOLD | Turn Total + Total Score / Turn ends |
| First player to reach Total Score of 100 or more is WINNER and game ends | Player Total Score = 100 | Player = WINNER / game ends |

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_
* _jQuery_
