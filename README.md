# Freeland and Safeland

Choice and rethinking on freedom and security

## Summary

This work discusses two issues of gun violence and privacy violations. And these two issues are covered by two beautiful words, freedom and security. Both of these issues are closely related to my personal experience

I'm from an area where everyone's under surveillance. Although it's for security purposes, this kind of privacy invasion still makes me feel uncomfortable and not free.
My first semester at CCA，I was robbed by 2 armed teenagers on my way to school. It was only 2 blocks amay from Oakland Campus. A few days later, a policeman called me to claim the lost property. When I saw the police take out pistols, drugs, bullets from my backpack, I realized the price of freedom.

## Component Parts

Freeland
1. 3D model of pistol
2. Text
3. Yolo Portrait recognition system 

Safeland
1. coded scene of an underground passage
2. Detecting camera as input
3. Text
4. Yolo Portrait recognition system 

## Timeline

- Week 1: finished Safeland and started writing porposal
- Week 2: Started woking on Freeland
- Week 3: Solved technical problems
- Week 4: Present!
 
## Challenges

Since the recognition system is based on the model training done by others, the movement of the camera is not so accurate. Because I am positioning based on the recognition frame, and the person cannot be recognized when the corner is, the camera cannot move to the corner. So I used a function algorithm to move the camera to the edge of the camera frame when the person was close to the edge of the screen
In another work, I originally wanted to use the same function algorithm to control the steering range of the pistol, but it did not work well, so I used the map function on the recommendation of my classmates.

## Completed Work

- Freeland: https://editor.p5js.org/sinisterpan/present/HSdYufrJk
- Safeland: https://editor.p5js.org/sinisterpan/present/JiNQ5d-1q

## References and links

https://editor.p5js.org/kylemcdonald/sketches/H1clUO9nm //Portrait recognition system coded by kylemcdonald
https://editor.p5js.org/slow_izzm/sketches/ByOUeWVjX. // webgl-text by slow_izzm
