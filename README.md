# Goo Business Dashboard

I did this project as part of a front-end technical task of an internship.

I deployed it on `Vercel`, you can visit the website here:
https://goo-business-dashboard.vercel.app/

## Project Details

In this project, I created a website using pure HTML, CSS, and JS. Here are some brief details about the website:

Here is the folder structure of the website:

```
└── index.html
└── index.js
└── static
   └── css
      └── ReferralDashboard
         └── style.css
   └── img
      └── ReferralDashboard
         └── img1
         └── img2
         └── ...
```

- You can refer to the images I used throughout the website, they're in the `static/images` folder.
- The icons used in the website are taken from the following websites:
  - https://fontawesome.com/
  - https://iconscout.com/
- I used `JavaScript` for the following sections of the website:
  - User/Admin current detail cards
    - I created an array of objects, each containing the details of each card.
    - Then, I used the `map()` function to create a reusable card for each of them.
  - Table that shows the services done by the user/admin
    - Similarly, I created an array of objects for the `services table` too.
    - Then, I created a reusable container for each service.
