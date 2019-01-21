# Redux Feedback Loop
For this project I used React and Redux to recreate the Prime Academy daily feedback app. This was my first project using redux, and also showcases conditional rendering and single page application routing.

### ADD NEW FEEDBACK

### REQUIREMENTS

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- [x] How are you feeling today?
![feeling](wireframes/page-one.png)
-  [x] How well are you understanding the content?
![understanding](wireframes/page-two.png)
- [x] How well are you being supported?
![support](wireframes/page-three.png)
- [x] Any comments you want to leave?
![comments](wireframes/page-four.png)

## THE REVIEW COMPONENT

[x] In addition to the multi-step form, the app needs to display the results of each step clearly and at all times. The simplest could be another component on the DOM which shows the results of the current survey and a Submit button.

### Incomplete, Submit button is disabled:
 [x]
![comments](wireframes/review-component-inactive.png)

### Survey complete, Submit button is active:
[x]
![comments](wireframes/review-component-active.png)

## SUBMIT THE FEEDBACK

 [x] The `Review` portion needs a submit button which will be clicked on to actually submit the completed feedback to the server. This submit button should only be active when all of the survey steps are complete.

 [x]When the submit button is clicked, save the submission in the database. The user should see a submission success page.

![understanding](wireframes/page-five.png)



