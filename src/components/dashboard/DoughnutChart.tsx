import { useEffect, useRef } from 'react';

const DoughnutChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock data for the chart
  const chartData = {
    labels: ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology'],
    datasets: [
      {
        data: [30, 20, 25, 15, 10],
        backgroundColor: [
          '#3b82f6', // blue
          '#8b5cf6', // violet
          '#10b981', // green
          '#f59e0b', // amber
          '#ef4444', // red
        ],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    // In a real implementation, you would use Chart.js
    // Here we're just showing a placeholder message
    ctx.font = '14px Arial';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'center';
    ctx.fillText('Doughnut chart would be rendered here', ctx.canvas.width / 2, ctx.canvas.height / 2);

    // Draw a simple circle representation
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = 80;

    // Draw segments manually
    const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    let startAngle = 0;
    
    chartData.datasets[0].data.forEach((value, index) => {
      const sliceAngle = (value / 100) * 2 * Math.PI;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      ctx.fillStyle = colors[index];
      ctx.fill();
      
      startAngle += sliceAngle;
    });

    // Draw inner circle for doughnut effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = ctx.canvas.style.backgroundColor || '#ffffff';
    ctx.fill();
    
    // Note: In a real implementation, you would use:
    // import Chart from 'chart.js/auto';
    // new Chart(ctx, { type: 'doughnut', data: chartData, options: { ... } });
    
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} height="240"></canvas>
    </div>
  );
};

export default DoughnutChart;
