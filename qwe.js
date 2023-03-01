const compromise = require('compromise');

const parseDateRange = (question) => {
    const doc = compromise(question);
    const date = doc.match('#Date+');
    if (date.found) {
        const startDate = date.text('YYYY-MM-DD');
        const endDate = date.add(10, 'days').text('YYYY-MM-DD');
        return { start: startDate, end: endDate };
    }
    return null;
};

const question = 'Как я работаю ближайшие 10 дней?';
const dateRange = parseDateRange(question);
console.log(dateRange);
