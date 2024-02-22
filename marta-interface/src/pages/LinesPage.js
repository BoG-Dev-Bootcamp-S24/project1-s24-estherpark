//Within the TrainList.js component, the data should be filtered to only return info for trains that are part of the specific line. For example, for the gold line we only want an array of gold trains.

export default function LinesPage() {
  // initialize some currColor state

  return (
    <div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
  );
}
