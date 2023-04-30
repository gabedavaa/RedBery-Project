'use strict';
/////////////////////////////////
import View from '../view.js';
/////////////////////////////////

class MarkupEdu extends View {
  _id;
  _moreEduContainer;
  _studyContainer;
  constructor() {
    super();
  }

  markupEdu(id, container, study) {
    this._id = id;
    this._moreEduContainer = container;
    this._studyContainer = study;

    const html = `
      <div class="experience" id="education--${this._id}"> 
            <!-- education -->
            <form class="contact--form margin-top--77">
              <div class="mail-container" id="university-input-parentDIV--${this._id}">
                <label for="text">სასწავლებელი</label>
                <input
                  id="university-input--${this._id}"
                  type="text"
                  required
                  placeholder="სასწავლებელი"
                />
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

            <!-- grade and end date -->
            <form class="names--form margin-top--31">
              <div class="name" id="level-input-parentDIV--${this._id}">
                <label for="name">ხარისხი</label>
                <!-- <input id="name" type="date" class="name--input" required /> -->
                <select name="" id="level-input--${this._id}" required>
                  <option value="">აირჩიე ხარისხი</option>
                  <option value="საშუალო სკოლა">საშუალო სკოლის დიპლომი</option>
                  <option value="ზოგადსაგანმანათლებლო">
                    ზოგადსაგანმანათლებლო დიპლომი
                  </option>
                  <option value="ბაკალავრი">ბაკალავრი</option>
                  <option value="მაგისტრი">მაგისტრი</option>
                  <option value="დოქტორი">დოქტორი</option>
                  <option value="ასოცირებული ხარისხი">
                    ასოცირებული ხარისხი
                  </option>
                  <option value="სტუდენტი">სტუდენტი</option>
                  <option value="კოლეჯი">კოლეჯი (ხარსიხის გარეშე)</option>
                  <option value="სხვა">სხვა</option>
                </select>
                <ion-icon
                  class="checkmark-icon hidden"
                  name="checkmark-outline"
                ></ion-icon>
                <ion-icon
                  class="alert-icon hidden"
                  name="alert-circle-outline"
                ></ion-icon>
              </div>
              <div class="name" id="endDateStudy-input-parentDIV--${this._id}">
                <label for="last-name">დამთავრების რიცხვი</label>
                <input
                  id="endDateStudy-input--${this._id}"
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

            <!-- education description -->
            <div
              class="about--me job-description"
              id="aboutStd-input-parentDIV--${this._id}"
            >
              <label for="about-me">აღწერა</label>
              <textarea
                id="about-std-input--${this._id}"
                class="name--input"
                type="text"
                placeholder="განათლების აღწერა"
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
      <div class="experience-section" id="study--${this._id}">
        <div class="border-bottom "></div>
        <h3 class="margin-top--24">განათლება</h3>
        <h4>
          <span id="university-output--${this._id}"
            >საქართველოს მეცნიერების აკადემია</span
          >,
          <span id="level-output--${this._id}">სტუდენტი</span>
        </h4>
        <h5>
          <span id="endDate-edu-output--${this._id}">2020-09-23</span>
        </h5>
        <h6 id="about-edu-output--${this._id}">
          ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
          კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
          მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
          ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
        </h6>
      </div>
    `;

    this._moreEduContainer.insertAdjacentHTML('beforebegin', html);
    this._studyContainer.insertAdjacentHTML('beforebegin', htmlView);
  }
}

export default new MarkupEdu();
