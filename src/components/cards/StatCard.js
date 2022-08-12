import React from "react";
import Utils from "../../utilityLibrary/dev/utils";
import CardLoader from "../content-loaders/cardLoader";

const StatCard = ({
  className,
  title,
  value,
  cardImage,
  filterImage,
  loading,
  currency,
  footer,
  isValueNumber,
}) => {
    value = Utils.formatCurrency(value);
  return loading ? (
    <CardLoader />
  ) : (
    <div className={`card stats ${className}`}>
      <div className="flex card-head  space-between">
        <div className="flex">
          <img src={cardImage} alt="Ship" />
          <span>{title}</span>
        </div>
        <img src={filterImage} alt="filter" className="filter-icon" />
      </div>
      <div className="card-body">
        <h4 className="stat-count">
          {currency ? <>&#8358;{value}</> : value}
        </h4>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};
export default StatCard;
