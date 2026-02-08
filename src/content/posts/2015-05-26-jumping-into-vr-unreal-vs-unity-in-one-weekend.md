---
title: Jumping into VR: Unreal vs. Unity in One Weekend
date: 2015-05-26
featuredImage: ../../assets/posts/jumping-into-vr-unreal-vs-unity-in-one-weekend/image-01.jpeg
canonicalUrl: https://medium.com/@ianhirschfeld/jumping-into-vr-unreal-vs-unity-in-one-weekend-4e5082657925
---

If you haven’t heard it yet, now is the time to get into virtual reality. The technology is finally advanced enough and more importantly affordable. Consumers, developers, and VCs are all heavily starting to invest their time, energy, and money. Since its inception, my company [The Soap Collective](http://www.thesoapcollective.com), always had intentions to enter the space. About a month ago, we decided to dive in head first and held a VR hackathon for ourselves. Our goal was to explore both Unreal Engine 4 and Unity 5 to get a feel for the software and what we could build with them.

**_Disclaimer_**_: To be fair, one weekend is not a long time to explore such complex software as Unreal Engine or Unity, let alone both at the same time. Below are very much just preliminary thoughts._

## Unreal Engine 4

![image](../../assets/posts/jumping-into-vr-unreal-vs-unity-in-one-weekend/image-02.jpeg)

I started the weekend by checking out Unreal Engine 4. It’s well known for being very powerful and the de facto engine for creating AAA games and experiences.

### Pros

- **Tutorials**: Video tutorials are a great way to get started. I began learning my way through UE4 using this [YouTube Playlist](https://www.youtube.com/playlist?list=PLZlv_N0_O1gasd4IcOe9Cx9wHoBB7rxFl). It was super helpful and nice refresher since my days using Maya. Anyone with a 3D background will find the layout and controls familiar. For every beginner question I had ranging from asset creation, to lighting, to how to use blueprint, I was able to find an official Unreal tutorial. This made jumping in and starting so much easier than I had anticipated.
- **Matinee**: I briefly played with Matinee and was super impressed! Setting up camera tracking and cutting was dead simple. This [example video](https://www.youtube.com/watch?v=EO0k92iVMjE) shows how “real” the camera work can feel using Matinee. I see this also helping early VR experiences feel a little more polished without much extra work, especially experiences that are “on rails”.
- **Blueprint**: I was not aware of Blueprint before trying out UE4, and it was a little bit mind blowing. “Programming” using visual drag and drop nodes was very cool. I also explored integrating Blueprint with custom C++ code to control variables and inputs within my demo scene. This seemed like a very handy tool with a lot of potential for creating complex interactions both programmatically and visually.
- **Prebuilt Effects & Assets**: UE is known for coming packaged with some pretty prebuilt effects and assets. It certainly passed the test. Using particles was simple and out of the box looks great. Definitely a fun and easy way to add some extra flare to a VR experience. The assets also allow for quickly creating environments that might otherwise take days or weeks. It can be a great placeholder while your team builds out its own custom models.

### Cons

- **Documentation**: For the most part documentation was pretty good. When diving into the coding side of UE4, I found it difficult to find examples of the classes and methods that I looked up. When searching online for “how to capture an image from a second camera”, I spent hours without ever really finding an answer. I had imagined it would be relatively simple, and something someone else has done before. This was probably the most discouraging part about UE, being unable to quickly find the answer to a seemingly straightforward question.
- **C++**: It isn’t totally fair to knock Unreal for its programming language. I just happen to come from a web background and I’m not particularly familiar with C++. It certainly won’t stop me from using UE4, it’s just another hump to get over, and I suspect as VR gains more traction there will be a greater number of web developers following suit.

## Unity 5

![image](../../assets/posts/jumping-into-vr-unreal-vs-unity-in-one-weekend/image-03.jpeg)

I spent the latter one-third of the hackathon weekend playing around with Unity 5. Having two days of Unreal under my belt already, picking up Unity seemed to have a lower learning curve.

### Pros

- **Tutorials**: Unity, just like Unreal, has a ton of great [tutorials](https://unity3d.com/learn/tutorials/modules) for beginners. I didn’t have a problem looking up anything I didn’t know, and so far it seems searching on Google for an answer is easier with Unity questions versus Unreal ones.
- **Documentation**: Both Unity programming concepts and their API have great documentation. The best part are the coding examples. Every API class or method I looked up came with a code snippet showing its use. Most snippets also came in both C# and JS. It’s also nice that their documentation often contains images of what you should see on the screen, which is super helpful.
- **C# & JS**: Unity comes with two options for programming: C# and JavaScript. I haven’t played around enough with C# to give it a proper review against C++ (which UE4 uses), however the inclusion of JS is nice. Coming from a web background, it’s convenient to know I can dive in and start programming with something I’m familiar with while I ramp on on C#.

### Cons

- **Background Processing**: Trying to quickly get threading working in Unity seemed challenging. Most of my (brief) research on the matter indicated that Unity doesn’t really do threading, at least not with its API. The threading capabilities that come native with C# are still available however. I haven’t played around with this enough to have a fully formed opinion, but my initially testing left something to be desired. Unity does have [coroutines](http://docs.unity3d.com/Manual/Coroutines.html), which allows for a certain level of “multitasking” while still keeping your VR experience at a high frame rate.

## Conclusions

Overall, both engines were pretty easy to start ramping up in. Ultimately, I chose Unity 5 as the starting point for a project I’m working on called [Atlas](http://www.atlasimmersive.com). Unity was easier and faster for me to build a VR experience that connected with a web server, which is what I needed. This isn’t to say Unreal Engine 4 can’t, I simply chose the tool I could see my team building quickly with. Eventually, I will transition to UE4 because I believe in the long run it will offer the best tools for creating the highest quality experiences.

If you’d like to learn more about what my company [The Soap Collective](http://www.thesoapcollective.com) is building in VR, check out our latest project [Atlas](http://www.atlasimmersive.com), an immersive virtual reality experience that’s built to share.
