import { v4 as uuidv4 } from 'uuid';

export default function SpaceXCard(props) {
  const { info } = props;
  return (
    <>
      <div className="card text-center">
        <img
          className="card-img p-2"
          src={info.links.mission_patch}
          alt={info.mission_name}
        />
        <div className="card-body">
          <h5 className="card-title text-center info-value">
            {info.mission_name} #{info.flight_number}
          </h5>
          <div className="text-left">
            <div>
              <strong>Mission Ids:</strong>
              {info.mission_id.length !== 0 && (
                <ul>
                  {info.mission_id.map((id) => (
                    <li key={uuidv4()}>{id}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <strong>Launch Year:</strong>
              <span className="info-value"> {info.launch_year}</span>
            </div>

            <div>
              <strong>Successful Launch:</strong>
              <span className="info-value"> {String(info.launch_success)}</span>
            </div>
            <div>
              <strong>Successful Landing:</strong>
              <span className="info-value">
                {String(info.rocket.first_stage.cores[0].land_success)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
