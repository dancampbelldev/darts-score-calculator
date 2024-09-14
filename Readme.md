About this app.

This is a two window darts scoring app. However the functionality of the overall app could be tweaked to work for different sports.

This app has two main modes.

Mode 1 - Average score tracker.
The app will track your average 3-dart score. Throw 3 darts and click the 'Add Score' button. This will place your score into a temorary array and display the score in the box below the 'Add Score' button. For every new score that is added via the this button, each will be added to the array. There is a function to average out all of the scores contained in the array and then display the resulting number to 2 decimal places in the white box under the 'Add score' button. Essentially displaying a running average score.
The user is unable to enter a score that is above 180 or less than 0.
The display will also show you how many scores have been entered and are currently in the array. This way you can set yourself a set number of scores to enter each time and stop when you have reached that amount to be consistent with your tracking routine.

When you have entered a satisfactory number of scores, you can then click the 'Record Score' button. Underneath there are 7 grey boxes labelled 'Day 1' to 'Day 7'. I decided to label the days as nubmers rather than day of the week names as you aren't necessarily going to start tracking on a Monday and always finish on a Sunday.
Upon clicking the 'Record Score' your average score from the temporary array will be displayed, the first score in box 'Day 1' and continuing to 'Day 7'. Every time the 'Record Score' button is clicked, the temporary array is emptied to make way for the new scores to be entered in you next day's scoring session.

Clicking the 'Record Score' button will add each day's average score into TWO arrays. The 1st array is used to display the scores in the daily score boxes. Upon reaching a length of 8 scores in this array (the 8th score representing the start of the new week's score tracking), the array will essentially be emptied and the 8th score or index[7] will be transferred to being the first score entered in the resetting of the array. So now the array consists of only 1 score to start off the next week. Also the daily score boxes will be cleared and the only score that is in the array will be displayed in 'Day 1', essentially restarting the week scoring process.
The 2nd array that the daily average scores are placed into is used to create a 'Daily Score Graph'. This graph will display coloured div elements that have a height in pixels that correlate to the daily scores. This gives the user a visual representation of how their scores are progressing over time. The scores are rounded to the nearest whole number for the graph representation. So a score of 50, or 50.35 will look the same visually.

Each time the 'Record Score' button is clicked, a running average will be displayed for the week. This score takes each day's average score and further averages them out for the week. The resulting average score for the week will then be displayed in dynamically generated HTML in the JS file. This display will display around 3 scores before making the display area for the week's averages scrollable. This is to keep the app looking tidy and for the page to not be ever-expanding in height. The week average scores will be displayed with the most recent at the top.

Local storage is utilised to save the data for the daily scores, both for the day score boxes and for the graph. And for the weekly averages, so if you refresh your page, the data will be stored and displayed accordingly.

At the bottom, underneath the graph is a clear button that will make a box appear that asks if you are sure you want to delete all data. If the 'Yes' button is clicked then that will clear all arrays and reset the score displays to blank. The 'No' button will simply make the pop-up alert box disappear.

Lastly, clicking the 'New Game' button at the top of the page will send you to the 2nd section of this app that is more Javascript intensive and allows you to play 1 or 2 player games and track the scores and legs of the games for each player.

Mode 2 - Darts game score tracker.
This window allows you to track your scoring whilst playing a game of darts. There is both a single player and 2 player mode.

This page begins with a pre-game lobby type box. You have the option to enter your name, however this isn't compulsory for the game to work. If no name is entered then in single player mode the player will simply be auto-named 'Player'. In 2 player mode the players will be named 'Player 1' and 'Player 2' respectively. Otherwise each play takes the name of whatever has been entered into their respective name input.

There is a red button that will set the game to either begin at a score of 501 or 301 for each player. This is set at 501 by default.

When clicking on the 'Two Players' button, the extra input appears for player 2 to enter their name. For 2 player mode only, you can set the amount of legs to play up to. This is not the total number of legs played, but rather the number of legs a player must win for the match to end. 1 player mode does not have this feature as it's seems redundant due to the fact they are not competing with anyone else.

1 player - When cicking the 'Start!' button, the pre-game lobby box will vanish and a new box will appear for gameplay score tracking. The box display will have the player name, score input, score enter button and the current score on display. Each time a score is entered into the input and the 'Enter Score' button is clicked, it will minus that score from the current score. The maximum score that can be entered is 180 (the maximum score that can be made with 3 darts), and the minumum is set to 0. If no score is entered into the input and the button is clicked, nothing will happen. This is to prevent accidental clicks. The input is emptied upon each button click.

If you enter a score and the result of that score causes your current score to reach 1 or less than 0, your score will be reset to what it was previous to entering that score and the score display will temporarily display 'No Score!'. You can then play your turn again. If your current score reaches zero then the score display will temporarily display 'End of Game' and you will be taken back to the pre-game lobby after a few seconds. Ths scoring box will disappear and all scores will be reset.

2 player - This mode works functionally the same as 1 player mode however there are a fair few differences. Firstly, upon starting the match the scoring box always appears with Player 1's name and score displayed. Each time the player enters their score, as usual it will be taken away from the starting/current score but then the box will change colour (from green to red and vice versa) and display the name and score of the opposing player. Player 1's display is always green, and Player 2's display is always red. There is a 1 second delay from when the score is entered to when the box visually changes to the opposing player colour and stats, this so that the player can see that their current score has changed when they entered their score. Without this delay, the instant player change feels almost like nothing has happened for the player that entered the score, that is until they see their score on the next turn, so this is for game flow and user experience purposes.

If the player's entered score causes the 'No Score' prompt, it will then be the opposing player's turn.

The game is also coded so that for every new leg that begins, the first player to throw is swapped, as it would be in a normal darts match. So in leg 1, the display for Player 1 will display first, and in leg 2, the display for Player 2 will be displayed first and so on.

In 2 player mode, underneath the scoring box there is a display to show the amount of legs each player has won, and the amount of legs they need to win the match. Every time a player's current game score reaches 0 and they win the game, the game restarts and refreshes each players starting score. Winning the game will cause that player's leg score to increase by 1. When the player's leg score matches the maximum leg score, they have won the match. The score display will show 'PLAYER X HAS WON THE MATCH!' for a few seconds and the the screen will be reset so that the scoring box disappears and the pre-game lobby box appears.

Above the pre-game lobby box, the 'Back' button will take you back to the Average Score Calculator window. This button is always visible.
