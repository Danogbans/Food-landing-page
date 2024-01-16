//Creating collapsed and open navbar with javasrcipt and CSS.

document.querySelector('.menu').addEventListener
('click', () => {
   document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change')
   }) 
})







// Creating icons silide show 

const icons = document.querySelectorAll('.section-1-icons i')

let i = 1

setInterval(() => {
    i++

    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }
 
}, 4000);

/*THE LOGIC BEHIND THIS SLIDE SHOW

1. Use a ' document all query selector' to select the image tags and put them in a const variable. 
2. Create a counter that will increase by 1 or change using a 'let' variable.
3. Use the 'setInterval()' function with an interval }1000).
4. Inside the mentioned function, set the counter variable to increase by 1 (1++)'.
5. Use  a 'document query selector to access the image/icon first class name and put it in a const variable.
6. Use the'const variable dot classList dot remove + (class name)' to remove the image class after the given interval.
7. Use an 'if statement' to check when the counter variable is greater than the image tags length. 
If so, the programm should return to the first image tag and add the class name again. '[0].constvariable.classList.add('classname').
If not, use an else statement to make the progaramm add the class name to the next element's sibling image/icon tag.
'constvariable.nextElementSibling.classList.add */ 