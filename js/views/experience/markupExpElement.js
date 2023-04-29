'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class MarkupExp extends View {
  _id;
  _moreExperienceContainer;
  _studyContainer;
  constructor() {
    super();
  }

  markupExp(id, container, study) {
    this._id = id;
    this._moreExperienceContainer = container;
    this._studyContainer = study;

    const html = `
    <div class="experience"  id="">
      <!-- experience and employer -->
      <form class="contact--form margin-top--37">
        <div class="mail-container" id="position-input-parentDIV--${this._id}">
          <label for="text">თანამდებობა</label>
          <input id="position-input--${this._id}" type="text" required placeholder="თანამდებობა" />
          <p>მინიმუმ 2 სიმბოლო</p>

          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>

        <div class="mail-container margin-top--31" id="employer-input-parentDIV--${this._id}">
          <label for="text">დამსაქმებელი</label>
          <input type="text" id="employer-input--${this._id}" required placeholder="დამსაქმებელი" />
          <p>მინიმუმ 2 სიმბოლო</p>

          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
      </form>

      <!-- start date and end date -->
      <form class="names--form margin-top--31">
        <div class="name" id="startDate-input-parentDIV--${this._id}">
          <label for="name">დაწყების რიცხვი</label>
          <input id="startDate-input--${this._id}" type="date" class="name--input" required />
          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
        <div class="name" id="endDate-input-parentDIV--${this._id}">
          <label for="last-name">დამთავრების რიცხვი</label>
          <input
            id="endDate-input--${this._id}"
            type="date"
            class="name--input"
            required
          />
          <ion-icon
            class="checkmark-icon hidden"
            name="checkmark-outline"
          ></ion-icon>
          <ion-icon
            class="alert-icon hidden"
            name="alert-circle-outline"
          ></ion-icon>
        </div>
      </form>

      <!-- job description -->
      <div class="about--me job-description" id="aboutExp-input-parentDIV--${this._id}">
        <label for="about-me">აღწერა</label>
        <textarea
          class="name--input"
          id="about-exp-input--${this._id}"
          type="text"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          required
        ></textarea>
        <ion-icon
          class="checkmark-icon hidden"
          name="checkmark-outline"
        ></ion-icon>
        <ion-icon
          class="alert-icon hidden"
          name="alert-circle-outline"
        ></ion-icon>
        <div class="border-bottom margin-top--58"></div>
      </div>
    </div>
      `;

    const htmlView = `
      <!-- experience section -->
      <div class="experience-section">
        <h3>გამოცდილება</h3>
        <h4>
          <span id="position-output--${this._id}">React Native Developer</span>,
          <span id="employer-output--${this._id}">Microsoft</span>
        </h4>
        <h5>
          <span id="startDate-output--${this._id}">2020-09-23</span> -
          <span id="endDate-output--${this._id}">2020-09-23</span>
        </h5>
        <h6 id="about-exp-output--${this._id}">
          Experienced Javascript Native Developer with 5 years in the
          industry. proficient withreact. Used problem-solving aptitude to
          encahge application performance by 14%.created data visualisation
          tools and integrated designs.
        </h6>
        <div class="border-bottom margin-top--31"></div>
      </div>
      `;

    this._moreExperienceContainer.insertAdjacentHTML('beforebegin', html);
    this._studyContainer.insertAdjacentHTML('beforebegin', htmlView);
  }
}

export default new MarkupExp();
