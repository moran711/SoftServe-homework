import {$} from '@core/dom';

export default class CalendarMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
      <table class="calendar-container">
       <caption class="table-header">
         <h2>
            Annual calendar of matches
         </h2>
       </caption>
       <tbody>
         <tr class="col-header">
          <th class="row-header">Date of match</th>
          <th class="row-header">Venue</th>
          <th class="row-header">Opponent / tournament</th>
         </tr>
         <tr class="row-content">
           <td class="col-content">04.11.2020</td>
           <td class="col-content">Camp Nou</td>
           <td class="col-content">Dynamo Kyiv</td>
         </tr>
         <tr class="row-content">
           <td class="col-content">21.11.2020</td>
           <td class="col-content">Estadio Wanda Metropolitano</td>
           <td class="col-content">Atletico Madrid</td>
         </tr>
         <tr class="row-content">
           <td class="col-content">06.12.2020</td>
           <td class="col-content">Estadio Ramón de Carranza</td>
           <td class="col-content">Cadiz</td>
         </tr>
         <tr class="row-content">
           <td class="col-content">30.12.2020</td>
           <td class="col-content">Camp Nou</td>
           <td class="col-content">Eibar</td>
         </tr>
       </tbody>
      </table>
    `;
  }
}
