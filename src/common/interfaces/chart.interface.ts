export default interface ChartConfig {
  series: [{
    name: string
    data: number[]
  }]
  options?: {}
}