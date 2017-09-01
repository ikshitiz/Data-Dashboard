var chart = c3.generate({
    bindto: '#reprint_rate',
    data: {
        x: 'Time',
        url: '/static/assets/data/asansol.csv',
        labels: true
        },
    size:{
        height: 500
        },
    axis: {
        x: {
            label: 'Time',
            type: 'category'}}
});
