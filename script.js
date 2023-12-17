let myRadarChart; // Referencia global al gráfico

function drawChart() {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Destruye el gráfico existente si ya existe
    if (myRadarChart) {
        myRadarChart.destroy();
    }

    const data = {
        labels: ['Forma', 'Basicos', 'Sambo Matsokgi', 'Accesorios', 'Lucha', 'Rotura', 'Teoria', 'Actitud'],
        datasets: [{
            label: 'Evaluación',
            data: [
                document.getElementById('forma').value,
                document.getElementById('basicos').value,
                document.getElementById('samboMatsokgi').value,
                document.getElementById('accesorios').value,
                document.getElementById('lucha').value,
                document.getElementById('rotura').value,
                document.getElementById('teoria').value,
                document.getElementById('actitud').value
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

