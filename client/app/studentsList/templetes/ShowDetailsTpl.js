'use strict';
tpl.info =
    `<p>Last Name: :lastName</p>
    <p>Name: :name</p>
    <p>Gender: :gender</p>
    <p>Skype: :skype</p>
    <button class="btn btn-edit">Edit</button>`;

tpl.edit =
    `<p>Last Name: <input type="text" name="lastName" value=":lastName"></p>
    <p>Name: <input type="text" name="name" value=":name"></p>
    <p>Gender: <input type="text" name="gender" value=":gender"></p>
    <p>Skype: <input type="text" name="skype" value=":skype"</p>
    <button class="btn btn-save">Save</button>`;
