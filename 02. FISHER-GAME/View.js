import Res from '/Res.js';
const View = (id, data) => {
  const { angler, weight, location, bait, species, captureTime } = data;
  let template = ` <div class="catch" data-id="${id}">
  <label>Angler</label>
  <input type="text" class="angler" value="${angler}" />
  <hr />
  <label>Weight</label>
  <input type="number" class="weight" value="${weight}" />
  <hr />
  <label>Species</label>
  <input type="text" class="species" value="${species}" />
  <hr />
  <label>Location</label>
  <input type="text" class="location" value="${location}" />
  <hr />
  <label>Bait</label>
  <input type="text" class="bait" value="${bait}" />
  <hr />
  <label>Capture Time</label>
  <input type="number" class="captureTime" value="${captureTime}" />
  <hr />
  <button class="update">Update</button>
  <button class="delete">Delete</button>
</div>`;
  Res.catches.innerHTML += template;
};
export default View;
