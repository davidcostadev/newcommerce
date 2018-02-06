import React from 'react'

const WidgetFilter = () => (
  <div>
    <h3>Filtrar</h3>
    <form>
      <span>Preço</span>
      <div className="form-row align-items-center">
        <div className="col-6">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Min." />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Máx." />
          </div>
        </div>
      </div>
      <span>Fabricantes</span>
      <div className="form-check">
        <label htmlFor="galaxy" className="form-check-label">
          <input type="checkbox" id="galaxy" className="form-check-input" /> Galaxy
        </label>
      </div>
      <div className="form-check">
        <label htmlFor="xperia" className="form-check-label">
          <input type="checkbox" id="xperia" className="form-check-input" /> Xperia
        </label>
      </div>
      <div className="form-check">
        <label htmlFor="iphone" className="form-check-label">
          <input type="checkbox" id="iphone" className="form-check-input" /> Iphone
        </label>
      </div>
      <div className="form-check">
        <label htmlFor="zemfone" className="form-check-label">
          <input type="checkbox" id="zemfone" className="form-check-input" /> Zemfone
        </label>
      </div>

    </form>
  </div>
)

export default WidgetFilter
