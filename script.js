const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    yoga: ['01-17', '01-18', '01-20'],
    water: ['01-17', '01-19', '01-20'],
    study: ['01-10', '01-18', '01-19'],
    sleep: ['01-15', '01-17', '01-16'],
}

nlwSetup.setData(data)
nlwSetup.load()