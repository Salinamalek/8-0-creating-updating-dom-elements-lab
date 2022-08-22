// add 'featured' class to the first 'section' element 
const section = document.querySelector('section');
section.setAttribute("class", "featured");

// declare a variable to access 'section .posts'
const sectionPosts = document.querySelector('.posts');

// create the 'article' tag
const article = document.createElement('article');

// create 'image' tag and attributes
 const image = document.createElement('img');
 image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
 image.setAttribute("alt", "Image of a mountain in front of a lake.");

 // create 'h3' tag and add text
 const h3 = document.createElement('h3');
 h3.textContent = "Stop Planning"

 // create 'p' tage & add text
 const p = document.createElement('p')
 p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

 //create aside tag
 const aside = document.createElement('aside')

 //create next 'p' tag
 const p2 = document.createElement('p')

 //create 'span' tag and add text
 const span = document.createElement('span')
 span.textContent = " 4 Minutes"

 //create 'strong' tag and add text
 const strong = document.createElement('strong')
 strong.textContent = "Read Time:"

 // create 'a' tag and attributes and text
 const a = document.createElement('a')
 a.setAttribute("href", "#")
 a.textContent = 'Read more...'

 // put everything together using append and prepend
 sectionPosts.append(article);
 article.append(image, h3, p, aside);
 aside.append(p);
 span.prepend(strong);
 p.append(span, a)