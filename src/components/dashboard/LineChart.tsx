import { useEffect, useRef } from 'react';

const LineChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'This Year',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Last Year',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: '#9ca3af',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        tension: 0.4,
        fill: true,
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
    ctx.fillText('Chart would be rendered here using Chart.js', ctx.canvas.width / 2, ctx.canvas.height / 2);
    
    // Draw a simple line representation
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(100, 80);
    ctx.lineTo(150, 120);
    ctx.lineTo(200, 60);
    ctx.lineTo(250, 70);
    ctx.lineTo(300, 40);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Note: In a real implementation, you would use:
    // import Chart from 'chart.js/auto';
    // new Chart(ctx, { type: 'line', data: chartData, options: { ... } });
    
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} height="300"></canvas>
    </div>
  );
};

export default LineChart;
