# Slashbeatz
Slash with beat &amp; get fit with Slashbeatz ⚡ 

## Inspiration
Long working hours on the computer, a desk job & lack of physical activities are a grim reality today, and so are increasing neck & back problems. Courtesy of lockdown and the era of work-from-home, such problems have just been increasing. To prevent them, doctors recommend regular exercise and periodic hand body stretches. Around 70% of the people across the globe, including children get affected by spondylitis at their young age sitting in front of their PC/Laptops & this took a huge lap in this period of working from home. We primarily focus to control that via our project in a very fun & intuitive way! We recommend **Slashbeatz**! ✨

## What it does
Slashbeatz is a game that uses body poses to track you. Start the game, step away from your computer and try to slash as many blocks as you can! It uses the poseNet() API to detect your poses for breaking cubes! 

**Slash with beat & get fit with Slashbeatz** ⚡

## How we built it
Slashbeatz is crafted with love. Our project model is running on Tensorflow.js and the client-side is populated via HTML, CSS & vanilla Javascript! The input is being taken via webcam & then processed such that we are emulating the player's hand itself as the saber sword which helps to slash those blocks which are coming towards the user. We have also utilized posenet API for the pose-estimation and semantic segmentation of the user & have integrated a few other API's for the music sequencing that can be activated via the Jio-Saavn widget on the viewport.

## Challenges we ran into
We took a lot of time configuring and refactoring the calibration code of the posenet model. Moreover, we were also looking at the security side as GDPR compliance is a very important thing to be kept in mind for these types of projects. The entire processing of the model runs on the browser itself & we had to optimize the script for low-tier systems. Also, it was a bit difficult for us to collaborate in a virtual setting but we somehow managed to finish the project on time.

## Accomplishments that we're proud of
We are proud of finishing the project on time which seemed like a tough task initially but happily were also able to add most of the features that we envisioned for the app during ideation.

## What we learned
A lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon 😆

## What's next for Slashbeatz
We just really want this project to have a positive impact on people's lives! Still, we would love to make it more scalable & cross-platform so that the user interaction increases to a great extent :)

Resources :-

- [Tf.js on GCP](https://dev.to/alvardev/posenet-tensorflow-js-on-gcp-1934)
- [Tensorflow pose estimation](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5)
- [Tensorflow deprecated blog](https://medium.com/@tensorflow)
- [Tfjs blog](https://blog.tensorflow.org/search?label=TensorFlow.js&max-results=20)
