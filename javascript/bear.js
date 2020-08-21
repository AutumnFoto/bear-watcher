const makeForm = ()=> {
$("#form-container").append(
`<input id="bearNameInput" class="form-control form-control-lg" type="text" placeholder="Input Bear Name">
<input id="bearImageInput" class="form-control form-control-lg" type="text" placeholder="Input Bear Image URL">
<button type="button" id="submit" class="btn btn-primary btn-lg">Submit</button>`
)
};

const bears = [];

const bearForm = () => {
    $("submit").click( () => {
        let bear = {}
        bear.bearName = $('bearNameInput').val();
        bear.bearImage = $('bearImageInput').val();

        bears.push(bear);
    }
    )
};

bearForm();
export {makeForm, bearForm}