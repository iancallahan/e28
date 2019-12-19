import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ViewPosts from '@/components/pages/ViewPosts.vue'

describe('ViewPosts.vue', () => {

    let post = {
        index: 0,
        date: "Sat Apr 14 2018 05:41:26 GMT-0400 (Eastern Daylight Time)",
        title: "Ullamco elit tempor ut consequat elit duis dolore reprehenderit.",
        body: "Exercitation ut laborum sit ea cupidatat amet culpa veniam incididunt id. Culpa veniam occaecat ut minim incididunt mollit ad ex nulla in. Cillum aliqua amet minim dolore amet. Voluptate nostrud fugiat elit ut mollit eiusmod ipsum laborum dolor labore. Id minim id enim non eiusmod. Nostrud mollit veniam consequat enim consequat ea deserunt ex ex sint. Magna ipsum sint pariatur adipisicing laboris esse elit ullamco consectetur.\r\nEnim fugiat qui commodo tempor dolore veniam et excepteur. Quis labore nisi officia dolor et. Aliquip pariatur et id elit consectetur magna quis tempor culpa adipisicing consectetur qui qui. Adipisicing ea qui in do minim adipisicing occaecat do. Deserunt est fugiat amet occaecat eiusmod eiusmod id adipisicing commodo esse Lorem sit.\r\n",
        category: "recipe",
        tags: ["whales","silly", "corn"]
    }

    it('shows all posts', () => {

        const wrapper = mount(ViewPosts, {
            data: function() {
                return {
                    posts: [post],
                    initialized: true,
                    loading: false,
                    error: ''
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.text()).to.include('RECIPES');
    })
})