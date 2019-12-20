## P3 Peer Review

+ Reviewer's name: Ian Callahan
+ Reviwee's name: Pat Ausman
+ URL to reviewee's Github repo: *<https://github.com/pausman/e28>*

### Are you able to produce any errors or unexpected results?
I was unable to produce any errors or unexpected results. 

### Were there any parts of the interface that you found confusing or unclear?
No, I think the interface is straightforward. 

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
The ShowFeatured component data property names are a bit confusing. 

```
dogs: null,
afeaturedDog: [],
chosenNumber: 0

```
Dogs is empty, afeaturedDog is an array but has a singular name. I think using dogs or featuredDogs for your v-for loop property would make it more readable. 

VoteDog component also seems to have an extraneous property:

```
addAlert: false,
```

Knowing myself, if I left that there and came back to it later I would be driving myself nuts trying to figure out why it was there since I don't see it used anywhere in the component. 

### Are there any parts of the code that you found interesting or taught you something new?
Love the use of an api config constant! So clean and readable in your components: 
```
export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/pausman/e28-dogs-api/',
}
```
It is definitely something I will do in the future. It is so offputting to have any hardcoded URLs in your components. 

### Are there any best practices discussed in course material that you feel were not addressed in the code?
Not that I am aware of. 

### Do you have any additional comments not covered in the above questions?
I think perhaps there is some exceessive markup in at least one component. For instance, the template for the VoteDog component:
```
<template>
  <div>
    <div>
      <a>
        <div>
          {{ dog.name }}
          <button @click='voteForDog(dog.id,dog.name)'>Vote for me</button>
        </div>
      </a>
    </div>
  </div>
</template>
```

It is not evident to me why you would need to wrap the name/button combo in an anchor tag and two divs. 

Also, my apologies for this being late. Work and life has been crazy this semester. Anyway, fun project! I liked learning about a ton of dog breeds that I had never heard of. 