import styles from "./infoCard.module.scss";
import ChartConfig from "@/common/interfaces/chart.interface";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Props {
  accontName: string;
  mediaUltimos30Dias: number;
  totalHoje: number;
  infoGrafico: ChartConfig;
  cardColor: string;
}

export const InfoCard = ({
  accontName,
  mediaUltimos30Dias,
  totalHoje,
  infoGrafico,
  cardColor,
}: Props) => {
  let fracaoDototal = Math.round(
    (totalHoje - mediaUltimos30Dias) / (mediaUltimos30Dias / 100)
  );
  infoGrafico.options = {
    chart: {
      type: "line",
      sparkline: {
        enabled: true
      },
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

  return (
    <div className={styles.componentWrapper}>
      <h4>{accontName}</h4>
      <div className={styles.contentWrapper}>
        <section>
          <h5 >Média ultimos 30 dias</h5>
          <p style={{color: cardColor}} className={styles.values}>R$ {mediaUltimos30Dias}</p>
        </section>
        <section>
          <h5>Total Hoje</h5>
          <p style={{color: cardColor}} className={styles.values}>R$ {totalHoje}</p>
          <p 
            className={
              fracaoDototal >= 0
                ? styles.percentualPositivo
                : styles.percentualNegativo
            }
          >
            {fracaoDototal > 0
              ? "+" + fracaoDototal + "%"
              : fracaoDototal + "%"}
          </p>
        </section>
        <section>
          <ReactApexChart
            options={infoGrafico.options}
            series={infoGrafico.series}
            width={"100%"}
            height={90}
          />
        </section>
      </div>
    </div>
  );
};
