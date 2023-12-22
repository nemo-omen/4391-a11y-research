export const violationTotalsOptions = {
  series: [
    {
      name: 'Mean Violations per Page',
      data: [3.3125, 8.5, 1.7143]
    },
    {
      name: 'Total Violations',
      data: [53, 51, 12]
    },
    {
      name: 'Minor',
      data: [2, 6, 7]
    },
    {
      name: 'Moderate',
      data: [44, 23, 5]
    },
    {
      name: 'Serious',
      data: [0, 12, 0]
    },
    {
      name: 'Critical',
      data: [7, 10, 0]
    },
    {
      name: 'Mean Accessibility Score',
      data: [23.56, 73.5, 4.57]
    },
  ],
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Banner Self Service', 'RamPort', 'Other'],
  },
  yaxis: {
    title: {
      text: 'Number of Violations'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val
      }
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#209fb3',
      shadeTo: 'dark',
      shadeIntensity: 0.75
    }
  },
};

export const usabilityTotalsOptions = {
  series: [
    {
      name: 'Task 1',
      data: [10, 8, 6]
    },
    {
      name: 'Task 2',
      data: [8, 6, 4]
    },
    {
      name: 'Task 3',
      data: [40, 35, 30]
    },
  ],
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Subject 1', 'Subject 2', 'Subject 3'],
  },
  yaxis: {
    title: {
      text: 'Time Taken per Task'
    }
  },
  fill: {
    opacity: 1
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#209fb3',
      shadeTo: 'dark',
      shadeIntensity: 0.75
    }
  },
  tooltip: {
    y: {
      formatter: function (val, {series, seriesIndex, dataPointIndex, w}) {
        return `${val} Min`;
      }
    }
  }
}