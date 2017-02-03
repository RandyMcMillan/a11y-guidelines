# Android accessibility guide

<script>$(document).ready(function () {
    
    setBreadcrumb([{"label":"Mobile criteria", "url": "./criteria-mobile.html"},
        {"label":"Android accessibility guide"}
	]);
    addSubMenu([
        {"label":"Android guide","url":"criteria-mobile.html", "expanded": true}, 
        {"label":"iOS guide","url":"criteria-ios.html"}
    ]);        	
});</script>

<span data-menuitem="criteria-mobile"></span>

This guide aims to present the different accessibility criteria for getting an accessible Android application. Each criterion explains for whom it is important, when it can be implemented, why it is important and the corresponding accessibility rule. The criteria are explained through code snippets and real cases examples. We invite you to install the [mDAN](./mdan.html) application for working examples of TalkBack, the screen reader for Android, and other assistive tools. For more information on the tool (how to activate it, how to use it…) please refer to the [TalkBack section](./talkback.html).

## Images
**Target : ** everyone and especially people with visual impairments.  
**When: ** from design and during development.

**Description: **

The images are often used to convey a lot of information. As the saying goes, a picture is worth a thousand words. The blind cannot see the images, it is important that they have an alternative that gives all the information carried by the image.
In the case of an image containing text, this text will be the alternative. In the case of an image that provides information as a graph, drawing or other, the alternative will contain all necessary information in the image.
  
Some images are used for decorative purposes. These pictures do not require alternative. By default, on Android the pictures are not vocalized by the TalkBack screen reader.
The illustrations in the application are also considered decorative images. The rule is the same: there is no alternative text to add.
Icons are, conversely, widely used as a button for various features. So they need relevant text alternatives.
  
The alternative of an image is set via the `contentDescription` attribute (available to any children of `View`).

**Checklist: **

- The images with information must convey this information through their text alternative
- Decorative images have no alternative text

**Users' goal: **

Access the information included in images for users who cannot access it. Blocking point: an image without textual description is unusable by people with visual impairments or those that cannot display images (mobile, low bandwidth...).

** Examples: **

<img src="./images/image_ex.png" alt="complete example of decorative picture and informative icon" width="400">  
  
By decomposing the image:  
- <img src="./images/montagnard.png" alt="example of decorative picture" width="256"> no `contentDescription`  
- <img src="./images/edit.png" alt="example of informative icon - parameters" width="48"> `imageView.setContentDescription("parameters")`  
- <img src="./images/settings.png" alt="example of informative icon - edition" width="48"> `imageView.setContentDescription("edit the image name")`
  
## Colors

**Target: ** everyone, especially people with visual impairments, elderly people and people with vision problems (color blindness, vision contrasts etc.)  
** When: ** from the design phase and during development.

**Description: **

Colors have a very important role in the transmission of information. Some colors are associated with concepts or feelings but we must never forget the part of the population that does not correctly distinguish colors.

**Checklist: **

- Do not use color as the only way of conveying information, indicating an action, requesting a response or distinguishing an element.
- The contrast between the color of the background and the text must be at least 7:1 and 4.5:1 for large font (can be measured with the color contrast analyzer tool).

**Users' goal: ** 

Ease of reading for all users especially the visually impaired, or people in a very bright environment (outdoors).
Allow users not distinguishing colors or sensory information (color blind, visually impaired, hearing impaired, mobile users in bright environment or in noisy environments...), access the same information by other means.

** Tools: **
The [color contrast analyzer](http://www.paciellogroup.com/resources/contrastanalyser/) application can quickly measure color contrast levels (free for Windows and Mac).  

The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including the color contrast. Available for Android 6+. 

** Example of invalid contrast **  
The label "film | 8:40 PM ..." does not have enough contrast. It will not be readable by all users.  

![screenshot showing text with poor contrast](images/contraste.png)

** Example of information passing through the valid and invalid color: ** 

<img src="./images/couleur.png" alt="example of information passing through the valid and invalid color" width="300">

  
## Alternative text

**Target: ** everyone and especially people with visual impairments.  
** When: ** from design, content writing and during development.

**Description: **

Text alternatives are at the core of mobile accessibility. Thanks to them, a visually impaired user can use an application without loss of information.
  
As for the images, it is important to add a text alternative when information is not available for the visually impaired/blind. This is the case of components that provide information by color, shape, position, sound... On mobile, all components can have a text alternative, it is possible to enrich the native vocalization of an element, including a simple text.
  
Space on mobile is reduced, we often use abbreviations for text. But However, this raise an issue for voice synthesis users that vocalize abbreviations as is. To correct these vocalizations, simply place a text alternative on the text. This alternative contains the unshorten text. Note that TalkBack can recognize some common abbreviations. For example, "etc." and "Dr." are vocalized "etcetera" and "doctor".
  
Some images are regularly associated with text to give information. This is the case of "unread messages" when a badge shows the number of messages to read and which describes a "message". In this case, the solution is to set a text alternative on the text that gives all the necessary information. For example: "3 unread messages". One can also set this alternative on the images but in this case we must make the text "invisible" to the screen reader.

The text alternative of an element is set via the `contentDescription` attribute (available to any children of `View`). For the buttons in the `ActionBar` (or `ToolBar`) the `title` attribute must be set.

**Checklist: **

- The elements that require alternative should have one
- The alternative text must be clear and understandable

**Users' goal: **

Provide access to application information to screen reader users.

** Example: **

Below is a common example of an icon that is associated with a text (badge) to add information. In our case, the icon "mail" associated with the "3" in the badge makes us understand that we have "3 unread mails". If no text alternative is added, two vocalizations will be read "unlabeled button" and "3". It is obvious that we must add text alternatives.
<img src="./images/alt.png" alt="icon example coupled with the text that requires a text alternative" width="80" class="pull-left">
<pre><code>containerView.setContentDescription("3 unread mails button"); //We add a complete alternative (previously dynamically built) on the container
containerView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_YES); //The container is a View, not visible by the default accessibility API. We make it visibile.
mailImageView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //We hide the button icon to avoid information redundancy
badgeTextView.setImportantForAccessibility(View.IMPORTANT_FOR_ACCESSIBILITY_NO); //The text is hidden to avoid information redundancy</code></pre>
   

## Title and header

** Target: ** everyone  
** When: ** from design and during content writing.

**Description: ** 

The page title is the first element vocalized or seen on a screen mobile. It makes the navigation easier for everyone: at any time, we know where we are in the application.  
A common mistake is to set a unique title for every page of an application (or even no title at all).

**Checklist: ** 

- Each screen must have its own title allowing use know where we are in the application navigation (with the back button)

**Users' goal: **

Allow users to identify the topic of a page, to locate and get a clear idea of ​​the content of the page without having to read it.

** Invalid example: **

<img src="./images/header.png" alt="example of irrelevant title (no title)" width="300">
  

## Element states

**Target: ** everyone and especially people with visual impairments.  
** When: ** during development.

**Description: **

If an element does not vocalize its status, nature or state, the TalkBack user is unable to understand what is happening on the screen. Not specifying that a view is unfolded or that we have tabs are very common examples.
  
Common mistake: the tabs. By default, tabs in Android do not give information on their nature and their state. It is therefore the responsibility of the developer to provide this information to the user via the corresponding accessibility attributes (`contentDescription`). In this case, a good alternative for the title of a tab can be "tab, tab title - 1 of 3 - selected"
  
Another common mistake is when elements do not vocalize their state: the expandable views. Again, thanks to the text alternative title of the view, we can vocalize the state of the view to the TalkBack users.
  
To set this kind of information, use the `contentDescription` attribute (availble to any children of `View`).

**Checklist: **

- Any item whose status changes when using the application must vocalize its status through its text alternative. For example, an item that can be selected/unselected must vocalize its state through a text alternative.

**Users' goal: **

Allow screen reader users to access component information, their status, their nature so they can use them without any difficulties.

** Example: **

<img src="./images/tabs.png" alt="example of tabs that do not restore their status and nature of default" width="400">  
To check a code snippet that corrects this issue, please refer to the corresponding page of the [Developer Guide](./dev-android.html#alternatives-textuelles).
  

## Standard components

**Target: ** everyone.  
** When: ** when choosing the libraries and during development.

**Description: **

Accessibility is (mostly) handled in the native components. Additionally, the use of standard components allows the user to be in a situation or behavior that he is already used to. Navigation through a standard interface is more comfortable.
  
Use native components as much as possible by changing their appearance. If no standard component corresponds to the need, create a dedicated component based on a standard component while keeping the consistency / accessibility consistency.
  
A common example is the use of a custom component for the side navigation menu (`NavigationDrawer`). Some of the available libraries are not accessible with a screen reader. Unfortunately, this makes the application inaccessible.

**Users' goal: **

Improve user navigation.

** Technical Objective: **

Improve overall maintainability. Reduce development time.
  

## Touch target

**Target: ** for everyone and especially people with motor impairments  
** When: ** from the design and during development.

**Description: **  

If a touch target of a component is too small, it can prevent some users to enjoy the application. This can lead to frustration that can result uninstalling it. Each clickable element must have a touch target large enough.

**Checklist: **

- 48 dp is the recommended touch target size for on screen elements according to Google (height and width, with 8 dp margin around the element).

**Users' goal: **

Improve user experience.

**Tools:**  
The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including the touch target size. Available for Android 6+. 

** Do: **

In the examples below, the black box corresponds to the size of the interactive area.  
<img src="./images/clic_ok.png" alt="interactive component example with a fairly large touch target" width="300">

** Don't: **

<img src="./images/clic_ko.png" alt="interactive component example with a small touch target" width="300">


## Ghost element

**Target: ** people with visual impairments.  
** When: ** during development.

**Description: **  

Although invisible to the screen, some elements can be vocalized by the screen reader (elements positioned outside the visible area or hidden by other elements). The superposition of screens is something current when designing mobile apps but it generates very heavy accessibility problems if it is not done properly from the start. A screen reader such as TalkBack is able to read information from a view that is placed "under" another. But if the user is able to interact with this view, it disturbs totally navigation and it quickly becomes impossible.
  
Common problem: the fragments. A fragment is a component that can be easily stacked one over another. Improper use of fragments may lead to serious problems when navigating with a screen reader.
  
Read the article on the [use of fragments](https://developer.android.com/guide/components/fragments.html) for more information.

**Checklist: **

- With the screen reader, there is no invisible reachable element or that should not take focus when reading a page.

**Users' goal: **

Allow screen reader users to navigate within the application without having hidden elements disturbing the reading of the current view.

** Don't: **

In the example below, the green frame represents the TalkBack focus. The latter vocalizes (vocalization is displayed at the bottom of the screen) the content behind the current view.
<img src="./images/ghost.png" alt="ghost element example" width="300">


## Text size

**Target: ** everyone and especially people with visual impairments.  
** When: ** from design and during development.

**Description: **

The user has the possibility of increasing the text size via an accessibility option. In order to make the application behave correctly to this option, it is necessary to use dynamic text sizes that adjust based on user settings. Too small text will be easily ignored by some visually impaired users.
  
The application must implement dynamic text sizes, ensure good responsiveness of the display areas to text enlargement (containers that fit the size of their content). You should also ensure a minimum size for text (14sp).
  
To enable the "Huge font size" option to properly interact with the application, several points are to be respected during the development:
- Use dynamic font size: the "sp". This unit, specific to Android, allows to have a font size proportional to the pixel density of the display. It is highly recommended to use it for text, if only for a uniform design on all types of Android device.
- Manage content overflows: A common mistake is to use a dynamic text size ("sp") but not to pay attention to the container size. If the text gets bigger, the container must adapt so there is no overflow. One can perfectly play with the `min-height` and `height` attributes for correct result (the `height`set to `wrap_content` and `min-height` set to the default desired height).

**Checklist: **

- The application correctly responds to the Huge font size option
- Minimum text size must be 14sp

**Tools:**  
The [AccessibilityScanner application](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor) allows you to test quickly and simply the accessibility of your apps on some criteria including the text size. Available for Android 6+. 

**Users' goal: **

Allow users (visually impaired, mobility, elderly people...) to increase the text size for easier access to information.

** Example: **

<img src="./images/text.png" alt="example using dynamic font size" width="300">


## Content Control

**Target: ** everyone and especially people with visual and cognitive deficiency.  
** When: ** when design and during development.

**Description: **

On mobile, screen readers try to notify the user when there is a context change. In some cases, it can give constant vocalizations, and therefore inaudible, or prevent any user action.
The user must control the content at any time. This is especially true with interactive content. So avoid video player launching directly in full screen mode, or videos starting automatically without user action, or a carousel scrolling automatically etc.

**Checklist: **

- All interactive content must be controlled by the user (pausing a carousel, adding an accessible button to exit full-screen mode etc).

**Users' goal: **

Allow users to keep control on the application. Allow the screen reader user to avoid noise polution which may affect navigation.

** Technical Objective: **

Improve the natural referencing.


## Changing content

**Target: ** everyone and especially people with visual impairments.  
** When: ** during development.

**Description: **

When content is dynamically modified after a user action, the screen reader must notify it. Without any voice feedback, the user does not know that the content has changed.  
If the content has changed dynamically after a user action, it is important that the screen reader is notified so that it triggers a vocalization. E.g. refreshing a list or a timer.

A simple vocalization can be enough to warn the user. It is very easy to trigger vocalizations with TalkBack. Warning: we are talking about the vocalization when TalkBack is enabled and not TTS (Text To Speech), the latter can operate whether Talkback is on or not. Just call the `announceForAccessibility` method with the parameter id of the string to vocalize. Note: the `announceForAccessibility` method is available on any item that inherits from` View` and is vocalized in the default system language.

It is also possible to specify that a view is a live region, that is to say that its content is subject to change dynamically and should in this case notify the Accessibility API. This will result in generating vocalizations with TalkBack for example. A typical use case: on a form, if the user makes a mistake and an error message appears, the view containing the message must be defined as a live region. You must use the `setAccessibilityLiveRegion` method that takes a mode parameter for the live region. There are 3 modes:
- `ACCESSIBILITY_LIVE_REGION_NONE`: this view is not a live region. This is the default for most views.
- `ACCESSIBILITY_LIVE_REGION_POLITE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are "polite"; they have lower priority than system vocalizations for example.
- `ACCESSIBILITY_LIVE_REGION_ASSERTIVE`: when a change occurs, vocalizations are triggered on the changes. These vocalizations are "assertive"; they have the highest priority and are immediately vocalized. Note the `setAccessibilityLiveRegion` method is available on any class that inherits from `View`.

**Checklist: **

- With a screen reader, ensure that dynamic changes are vocalized.

**Users' goal: **

Provide access to changing content to screen reader users.


## Horizontal scroll

**Target: ** everyone and especially people with visual impairments.  
** When: ** from design and during development.

**Description: **

A horizontal scroll can be very difficult to detect if no visual feedback is displayed to help the user understand that there are several pages.
Do not hesitate to display a view to indicate a horizontal scroll (dots for example). When necessary, also add "next" and "previous" buttons.

**Checklist: **

- The horizontal scrolls are visually indicated
- It should be possible to switch pages for screen reader users.

**Users' goal: **

Provide a visual indication to users when there is horizontal scroll. Allow screen reader users to scroll horizontally.

<div class="sideToSide row">
<div class="col-sm-6 col-xs-12">
** Do: **

<img src="./images/scroll_h1.png" alt="Example with accessible horizontal scroll" width="300">
</div>
<div class="col-sm-6 col-xs-12">
** Don't: **

<img src="./images/scroll_h2.png" alt="example of invalid horizontal scroll" width="300">
</div>
</div>

## Form

**Target: ** everyone and especially people with visual impairments.  
** When: ** from design and during development.

**Description: **

Binding the form fields with their labels provides an additional vocalization allowing the user to understand what happens when filling out a form field.
  
There are 2 major techniques to achieve this link:
 - `LabelFor`: allow to specify a label to a view. This method takes the id of the view that it is associated. This method can be used any almost type of form field. We can also use xml `android:labelFor` or programmatically `setLabelFor`.
 - `Hint`: add an example text when the text field is empty. This method only works for `TextView`. Supports setting the id to a string. Can be used in xml `android:hint` or programmatically `setHint`.

**Checklist: **

- Form fields must be linked to a label if it is visible, otherwise a `hint` is displayed.

**Users' goal: **

Improve navigation by improving the overall understanding of the page, the form fields describing the expected input.


## Reading order

**Target: ** people with visual impairments.  
** When: ** during development.

**Description: **

The reading order allows the screen reader user to locate the navigation and ensuring functional coherence. It is therefore important to pay attention to it.
  
By default, the reading order of voice synthesis depends on: the 'logical' reading (in France), from left to right and top to bottom, and xml reading (order of elements declaration). However, there are some cases where the screen reader cannot determine the correct order, and uses the order of xml elements definition leading to inconsistent vocalizations.
  
It is quite possible to redefine the reading order with two attributes:
- `AccessibilityTraversalAfter`: sets the id of a view after which this one is visited in accessibility traversal. A screen-reader must visit the content of the other view before the content of this one.
- `AccessibilityTraversalBefore`: sets the id of a view before which this one is visited in accessibility traversal. A screen-reader must visit the content of this view before the content of the one it precedes.

Note: These attributes can be used directly in the xml but also in the code via the `setAccessibilityTraversalBefore` and `setAccessibilityTraversalAfter` methods. These methods are available for any element that inherits from `View`.

**Checklist: **

- Traversal order (TalkBack) is logical and coherent.

**Users' goal: **

Ensure logic order and coherent reading to screen reader users.

** Example: **
In this example, the default playback order depends completely on the implementation  and on the order of element declaration. In this case: `vol+, vol-, 1, 2, 3, 4, 5, 6, 7, 8, 9, p+, p-, 0`. A more consistent reading order is `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, vol +, vol-, p + p-`.

<img src="./images/order.png" alt="Example of reading order" width="300">
<pre><code>volupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.remote0).getId());
voldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.volup).getId());
channelupButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.voldown).getId());
channeldownButton.setAccessibilityTraversalAfter(myView.findViewById(R.id.channelup).getId());
[...]</code></pre>


## Focus navigation

**Target: ** everyone and especially people with motor impairments or people using keyboard.  
** When: ** from design and during development.

**Description: **

Focus navigation is very useful for people with motor or cognitive difficulties. This navigation allows to go through the interactive elements (element on which an action can be performed). This is the kind of navigation that you can have with a Bluetooth keyboard paired to a smartphone.

To handle focus navigation, make sure to:
- Allow interactive elements to receive the focus: focus navigation only concerns interactive elements. If, for example, your application has clickable custom views, it must be ensured that these views are focusables setting the `focusable` attribute to `true`.
- Managing the focus order: through the `nextFocusDown, nextFocusUp, nextFocusRight,nextFocusLeft` options, you can specify what view should take the focus when using the down, up, right and left arrow.
- Managing the focus display: interactive elements must have the `state_focused` defined and must be easily distinguishable when having the focus.

Note: `nextFocusDown, nextFocusUp, nextFocusRight, nextFocusLeft, focusable` and other focus management options are available either in the xml or programmatically.
  
For more information on the [focus management on Android](http://developer.android.com/guide/topics/ui/accessibility/apps.html#focus-nav).


**Checklist: **

- The order of navigation focus (keyboard) is logical and coherent.
- It should be visually easy to determine the element that has focus

**Users' goal: **

Allow keyboard/dock tablet/sequential navigation device users to access the application.  

<!--  This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
 Copyright (C) 2016  Orange SA
 See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file). -->