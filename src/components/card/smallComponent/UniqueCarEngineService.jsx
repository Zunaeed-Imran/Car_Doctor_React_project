import uniqueService from '../../../assets/cardImage/Rectangle 1540.png';
import UniqueCarCard from './UniqueCarCard';

function UniqueCarEngineService() {
  return (
    <div>
      <div>
        <img src={uniqueService} alt="uniqueService" className="py-5" />
        <h1 className="text-left text-4xl font-bold py-4">
          Unique Car Engine Service
        </h1>
        <p className="text-left leading-loose">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <UniqueCarCard
          heading={'Instant Car Services'}
          details={
            'It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
          }
        />
        <UniqueCarCard
          heading={'24/7 Quality Service'}
          details={
            'It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
          }
        />
        <UniqueCarCard
          heading={'Easy Customer Service'}
          details={
            'It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
          }
        />
        <UniqueCarCard
          heading={'Quality Cost Service'}
          details={
            'It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
          }
        />
      </div>
    </div>
  );
}

export default UniqueCarEngineService;
