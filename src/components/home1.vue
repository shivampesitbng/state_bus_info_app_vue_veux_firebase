<template >
  <div>

  <div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded">
        <main class="mdl-layout__content">
          <div class="demo-back">
            <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="#" title="go back" role="button">
              <router-link to="/"><i class="material-icons" role="presentation" style="color:#fff;margin-top:10px;">arrow_back</i></router-link>
            </a>
          </div>
          <div class="demo-blog__posts mdl-grid">
            <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col" id="main_comp10">
              <div class="mdl-card__media mdl-color-text--grey-50">
                <h3>Travel Blog</h3>
              </div>
              <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
                <div class="minilogo"></div>
                <div>
                  <strong>Rajasthan Tourism</strong>
                  <!--span>2 days ago</span-->
                </div>
                <div class="section-spacer"></div>
                <!--div class="meta__favorites">
                  425 <i class="material-icons" role="presentation">favorite</i>
                  <span class="visuallyhidden">favorites</span>
                </div-->
                <!--div>
                  <i class="material-icons" role="presentation">bookmark</i>
                  <span class="visuallyhidden">bookmark</span>
                </div-->
                <div>
                  <i class="material-icons" role="presentation">share</i>
                  <span class="visuallyhidden">share</span>
                </div>
              </div>
              <div class="mdl-color-text--grey-700 mdl-card__supporting-text">
              <h3>Places To Must Visit in Rajasthan !</h3>
                <p>
                Rajasthan, known formerly by the name Rajputana or the land of the kings, is the largest state in the republic of India. It covers an area of 342,239 sq kilometers which is 10.4% of India. However despite of its large size it is covered by the Great Indian Desert, Thar. The Thar Desert runs parallel to the Sutlej-Indus river valley. Being located at the forefront of Indian civilization, the state of Rajasthan has seen the age of kings thus, explaining the moniker ‘the land of kings’. Rajasthan houses an amazing display of arts and architecture, courtesy of it being a princely state. Each individual kingdom of Rajasthan has a distinctive style of architecture and arts making it one of the most culturally diverse places in the world. In this article we shall list out the 10 popular places to visit in Rajasthan.
                </p>
                <h3>Jaipur</h3>
                <p>
                  Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo. Incididunt eu enim enim ipsum Lorem commodo tempor duis eu ullamco tempor elit occaecat sit. Culpa eu sit voluptate ullamco ad irure. Anim commodo aliquip cillum ea nostrud commodo id culpa eu irure ut proident. Incididunt cillum excepteur incididunt mollit exercitation fugiat in. Magna irure laborum amet non ullamco aliqua eu. Aliquip adipisicing dolore irure culpa aute enim. Ullamco quis eiusmod ipsum laboris quis qui.
                </p>
                <h3>Udaipur</h3>
                <p>
                While in a few texts, it has been termed as the Venice of the East, the City of Udaipur is known by its common moniker, the city of lakes. The city was the capital of the Sisodiya Rajputs of Mewar and is famous for its palaces that exemplify the finesse of Rajputana Style architecture. Udaipur was founded in 1553 by the Sisodiya Rajput Ruler Maharana Udai Singh II. The Mewar Rajputs founded the city to relocate their capital from Chittor to a more secure location. Today, most of the palaces have been converted into hotels, thus attracting a huge no. of tourist crowd to this city.
                </p>
                <h3>Jodhpur</h3>
                <p>
The second largest City of Rajasthan, Jodhpur is also the second most populated city of Rajasthan after Jaipur. The city was founded in 1459 by the Rathore Rajput Ruler, Rao Jodha Singh of Marwar. The city was founded as Marwar’s new capital after the fall of the former capital of Mandore. Jodhpur is also called the Sun City as it enjoys a bright sunny weather all year round. Strategically, it is considered to be the most important city of western Rajasthan as it lies only at a distance of 250 kilometers from the Indo-Pakistan border.
                </p>
                <h3>Jaisalmer</h3>
                <p>The aptly named 'golden city', which comes from its view during the day, the city of Jaisalmer lies in the heart of the Thar Desert. The city was founded by The Bhati Rajput ruler Maharawal Jaisal Singh in 1156 Ad and it gets its name from the golden sands of the Thar Desert and the same golden colored sandstone used in the city’s architecture. This is a famous tourist spot due to its magnificent architecture and the various arts and crafts which are unique to this region. It thrives on tourism, and can be called a home away from home for a huge no. of tourists from all around the world.</p>
                <h3>Bikaner</h3>
                <p>
                The city of Bikaner was founded in 1488 by the Rathore Rajput Ruler Rao Bika. Rao Bika was the son of the Rathore Ruler Rao Jodha who founded Jodhpur. The land was usurped from the rivaling Jat rulers of that time. However, no matter how many wars the ancient city has seen in the past, today Bikaner is another prime tourist destination and is famous for its sweets and snacks. The place is known for its forts and food.
                </p>



            </div>

            </div>


          </div>
          <footer class="mdl-mini-footer">
            <div class="mdl-mini-footer--left-section">
              <button class="mdl-mini-footer--social-btn social-btn social-btn__twitter">
                <span class="visuallyhidden">Twitter</span>
              </button>
              <button class="mdl-mini-footer--social-btn social-btn social-btn__blogger">
                <span class="visuallyhidden">Facebook</span>
              </button>
              <button class="mdl-mini-footer--social-btn social-btn social-btn__gplus">
                <span class="visuallyhidden">Google Plus</span>
              </button>
            </div>
            <div class="mdl-mini-footer--right-section">
              <button class="mdl-mini-footer--social-btn social-btn__share">
                <i class="material-icons" role="presentation">share</i>
                <span class="visuallyhidden">share</span>
              </button>
            </div>
          </footer>
        </main>
        <div class="mdl-layout__obfuscator"></div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {


      }

    },
    methods : {

    },
    mounted(){


    },

  }
</script>

<style>

@media screen and (max-width: 425px) { /*//less than 480*/
    body {
        /*display:none;*/

    }
    #main_comp10{
     /*height:100hv;*/
      margin-top:-49%;


    }

}
@media screen and (min-width: 768px ) and (max-width:840px) {
    body {
        /*display:none;*/

    }
    #main_comp10{
    /*  height:500px;*/
  /*  height:84vh; */
      margin-top:-19%;

    }

}



</style>
