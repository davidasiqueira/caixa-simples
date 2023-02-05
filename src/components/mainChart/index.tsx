import styles from './mainChart.module.scss'
import ChartConfig from '@/common/interfaces/chart.interface';
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  infoGrafico: ChartConfig;
  cardColor: string
}

export const MainChart = ({infoGrafico, cardColor}: Props) => {

  infoGrafico.options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      colors:[cardColor]
    },
    grid: {
      show: false, 
    },
  };

  return(
    <div className={styles.mainChartWrapper}>
      <ReactApexChart options={infoGrafico.options}
            series={infoGrafico.series}
            width={"100%"}
            height={230} />
    </div>
  )
}