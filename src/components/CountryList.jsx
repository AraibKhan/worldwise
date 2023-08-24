// import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add a city by clicking on the map." />;

  // const countries = [];
  // cities.forEach((city) => {
  //   if (!countries.map((el) => el.country).includes(city.country))
  //     countries.push({ country: city.country, emoji: city.emoji });
  // });

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
