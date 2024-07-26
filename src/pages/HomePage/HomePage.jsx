import DocumentTitle from '../../components/DocumentTitle';
import css from '../HomePage/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
