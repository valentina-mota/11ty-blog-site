---
title: Flashlight effect with vanilla JS vs spotlight effect with GSAP and CSS
author:
date:
tags: ["post"]
image: /assets/blog/article-6-feat-cover-1440x1080_ratio4-3.png
imageAlt:
description: In this article, I am going to explore two different approaches to creating a dynamic light effect over an image gallery grid.
---

## Introduction

In this article, I am going to explore two different approaches to creating a dynamic light effect on an image gallery:

- the **Flashlight Effect with Vanilla JavaScript**.
  <br>
  <br>

- the **Spotlight Effect** created using **GSAP and CSS**.

You will see how each effect works, the technologies they leverage, and in which scenarios they might best suit your needs.

## Flashlight effect with vanilla JS

### Effect description

The Flashlight Effect emulates a flashlight following the mouse cursor, illuminating a portion of the screen while the rest remains dark.

This effect is rendered in the browser dynamically by continually updating CSS custom properties to track the position of the light source.

![Flashlight Effect Rendering](/assets/blog/article-6-css-gsap-flashlight-effect.png)

### How it works

- **HTML**: The HTML structure is straightforward, consisting of an image gallery grid with an overlay for darkening the "light" areas, which reflects the light source.
  <br>
  <br>

- **CSS**: The `background-image` property with a radial-gradient is used to create the circular light. The gradient's position is updated based on the CSS custom properties: `--x` and `--y`, representing the cursor coordinates.
  <br>
  <br>

- **JavaScript**: A short Vanilla JS script captures the mouse coordinates and updates the CSS custom properties in real-time, moving the light circle smoothly across the screen.

![JavaScript Code](/assets/blog/article-6-carbon_01.png)

### Strengths

- **Simplicity**: The implementation is simple and direct, ideal for projects that require a lightweight solution with no external dependencies.
  <br>
  <br>

- **Performance**: With minimal JavaScript, it ensures excellent performance on both mobile and desktop devices.

### Limitations

- **Limited Customization**: Being a native implementation, extending or modifying the effect can be challenging without adding extra complexity.
  <br>
  <br>

- **Animation**: The smoothness of the animation depends mainly on the browser's capabilities, with no advanced tools for managing timelines or easing effects.

## Spotlight effect with GSAP and CSS

### Effect description

In order to create the Spotlight Effect, I created two identical grid sections, adding the attribute:
<br>
<br>
<code>
aria-hidden = "true"
</code>
<br>

to one of them for **accessibility** reasons. These two sections are overlapped (with the brighter one on top). The light circle is then created using the clip-path property on the top section, effectively revealing the "hidden content" beneath.

Here, GSAP manages the smooth and precise animation of the light circle’s position as it follows the mouse movement. Specifically, GSAP is used to animate the values of the CSS custom properties `--x` and `--y`, which determine the center position of the light circle within the overlay element.

![Spotlight Effect Rendering](/assets/blog/article-6-css-gsap-spotlight-effect.png)

<br>

### How it works

- **HTML**: The HTML consists of an image gallery grid, with an added layer - a section with the class `overlay` - that uses the clip-path property to create the light circle.
  <br>
  <br>

- **CSS**: The `clipPath` property is animated to create a light effect following the mouse. Additionally, GSAP is used to handle transitions, providing smooth transitions
  and highly customizable effects.
  <br>
  <br>

- **JavaScript**: GSAP animates the CSS properties – `--x` and `--y`, enhancing the visual experience and allowing for customization through easing and other advanced features.

![JavaScript Code](/assets/blog/article-6-carbon_02.png)

<br>

### Strengths

- **Power and Flexibility**: Using GSAP allows for creating complex animations with ease, making it ideal for projects requiring advanced visual effects.
  <br>
  <br>

- **Customization**: Easing options, timelines, and other GSAP features provide a high degree of control over the effect.

### Limitations

- **Dependencies**: Using GSAP adds a dependency to the project, which can increase load time and setup complexity.
  <br>
  <br>

- **Performance**: While GSAP is optimized, using advanced animations may impact performance on less powerful devices.

## Conclusion

Both effects offer creative solutions for advanced visual interactions, but they are suited to slightly different scenarios:

- The **Flashlight Effect** is **lightweight** and **simple**, perfect for projects where speed and simplicity are essential.
  <br>
  <br>

- The **Spotlight Effect** on the other hand, offers a **broader range of creative possibilities** and **finer control over animations**, making it ideal for more complex and visually rich projects. The choice between the two depends on the specific needs of the project and the resources available.
  <br>
  <br>
  <br>

This article is inspired by [Michelle Barker](https://www.linkedin.com/in/michelle-barker-02819230/)’s study [Dynamic CSS Masks with Custom Properties and GSAP](https://tympanus.net/codrops/2021/05/04/dynamic-css-masks-with-custom-properties-and-gsap/).

**Images:** [Freepik.com](https://www.freepik.com/), [Carbon.sh](https://carbon.now.sh/)

**Code:**: [GitHub Repository](https://github.com/valentina-mota/lighting-effects-projects/tree/main)
