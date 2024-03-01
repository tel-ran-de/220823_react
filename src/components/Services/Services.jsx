import layers from '../../images/layers.svg'
import smartphone from '../../images/smartphone.svg'

const Services = () => {
  return (
    <div>
      <div>
        <img src={smartphone} alt="" />
        <div>
          <h2>Mobile Development</h2>
          <p>
            We develop mobile apps for all contemporary mobile platforms. Mamon team builds native
            and cross-platform solutions.
          </p>
        </div>
      </div>
      <div>
        <img src={layers} alt="" />
        <div>
          <h2>Web Development</h2>
          <p>
            Mamon offers full range of services from various CMS and frameworks based websites to
            complex ERP/CRM solutions and e-commerce stores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
