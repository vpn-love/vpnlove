import { useState } from 'react';
import { VPNsStore, FiltersStore } from '../../../stores/';
import { observer } from 'mobx-react';
import Multiselect from 'multiselect-react-dropdown';

import './FiltersVPN.scss';

const FiltersVPN = observer(() => {
  const { countriesList, platformsList, paymentMethodsList } = FiltersStore;
  const { selectedPaymentMethods, selectedPlatforms, selectedCountries, RFAvailable } = VPNsStore;
  const [stateRFAvailable, setStateRFAvailable] = useState(RFAvailable);
  const deleteFilter = (key, filter) => {
    let list = [];
    switch (filter) {
      case 'platforms':
        list = selectedPlatforms.filter((n) => n.slug !== key);
        VPNsStore.selectedPlatforms = list;
        break;
      case 'payments':
        list = selectedPaymentMethods.filter((n) => n.slug !== key);
        VPNsStore.selectedPaymentMethods = list;
        break;
      case 'countries':
        list = selectedCountries.filter((n) => n.code.toLowerCase() !== key.toLowerCase());
        VPNsStore.selectedCountries = list;
        break;
      case 'all':
        VPNsStore.selectedCountries = list;
        VPNsStore.selectedPaymentMethods = list;
        VPNsStore.selectedPlatforms = list;
        setStateRFAvailable(false);
        VPNsStore.RFAvailable = false;
        break;
      default:
        break;
    }
    VPNsStore.filterVPN();
  };
  return (
    <div className="filters__wrapper">
      <div className="filters__list">
        <Multiselect
          emptyRecordMsg="Ничего не найдено"
          options={paymentMethodsList}
          selectedValues={selectedPaymentMethods}
          onSelect={(value) => {
            VPNsStore.selectedPaymentMethods = value;
            VPNsStore.filterVPN();
          }}
          displayValue="name"
          onRemove={(value) => {
            VPNsStore.selectedPaymentMethods = value;
            VPNsStore.filterVPN();
          }}
          placeholder="Способы оплаты"
          hidePlaceholder={false}
          showCheckbox={true}
          hideSelectedList={true}
          className={`filter__item filter-payment_methods ${selectedPaymentMethods.length > 0 ? 'active' : ''}`}
        />
        <Multiselect
          emptyRecordMsg="Ничего не найдено"
          options={platformsList}
          selectedValues={selectedPlatforms}
          onSelect={(value) => {
            VPNsStore.selectedPlatforms = value;
            VPNsStore.filterVPN();
          }}
          displayValue="name"
          onRemove={(value) => {
            VPNsStore.selectedPlatforms = value;
            VPNsStore.filterVPN();
          }}
          placeholder="Платформы и ОС"
          hidePlaceholder={false}
          showCheckbox={true}
          hideSelectedList={true}
          className={`filter__item filter-plarforms ${selectedPlatforms.length > 0 ? 'active' : ''}`}
        />
        <Multiselect
          emptyRecordMsg="Ничего не найдено"
          options={countriesList}
          selectedValues={selectedCountries}
          onSelect={(value) => {
            VPNsStore.selectedCountries = value;
            VPNsStore.filterVPN();
          }}
          displayValue="name"
          onRemove={(value) => {
            VPNsStore.selectedCountries = value;
            VPNsStore.filterVPN();
          }}
          placeholder="Страны"
          hidePlaceholder={false}
          showCheckbox={true}
          hideSelectedList={true}
          className={`filter__item filter-countries ${selectedCountries.length > 0 ? 'active' : ''}`}
        />
        <div
          className={`filter__item filter-rf ${stateRFAvailable ? 'active' : ''}`}
          onClick={() => {
            setStateRFAvailable(!stateRFAvailable);
            VPNsStore.RFAvailable = !stateRFAvailable;
            VPNsStore.filterVPN();
          }}
        >
          <span>Доступно в РФ</span>
          {stateRFAvailable && (
            <div className="filter__item-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#550CE9"
                  sstrokewidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {(selectedPlatforms.length > 0 || selectedCountries.length > 0 || selectedPaymentMethods.length > 0) && (
        <div className="filters_selected__list">
          {selectedPaymentMethods.map((node, key) => {
            return (
              <div className="filter__item" key={key}>
                {node.name}
                <div
                  onClick={() => {
                    deleteFilter(node.slug, 'payments');
                  }}
                  className="filter__item-close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#550CE9"
                      sstrokewidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
          {selectedPlatforms.map((node, key) => {
            return (
              <div className="filter__item" key={key}>
                {node.name}
                <div
                  onClick={() => {
                    deleteFilter(node.slug, 'platforms');
                  }}
                  className="filter__item-close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#550CE9"
                      sstrokewidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
          {selectedCountries.map((node, key) => {
            return (
              <div className="filter__item" key={key}>
                {node.name}
                <div
                  onClick={() => {
                    deleteFilter(node.code, 'countries');
                  }}
                  className="filter__item-close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#550CE9"
                      sstrokewidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            );
          })}

          <div className="filter__item filter__item-delete" onClick={() => deleteFilter(null, 'all')}>
            Сбросить фильтры
          </div>
        </div>
      )}
    </div>
  );
});

export default FiltersVPN;
