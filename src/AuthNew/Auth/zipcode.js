import React, { useEffect } from 'react';

const AddressAutocomplete = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "https://cdn.getaddress.io/scripts/getaddress-autocomplete-1.3.6.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      
      if (window.getAddress) {
        window.getAddress.autocomplete(
          'textbox_id',
          'cX9Pb7orKE2O7p4wr9uHZg43744',
          {
            output_fields: {
              formatted_address_1: 'formatted_address_1',
              formatted_address_2: 'formatted_address_2',
              formatted_address_3: 'formatted_address_3',
              formatted_address_4: 'formatted_address_4',
              postcode: 'postcode'
            },
            select_on_focus: true,
            clear_list_on_select: true,
            suggestion_count: 6,
            minimum_characters: 2,
            bind_output_fields: true
          }
        );
      }


      document.addEventListener("getaddress-autocomplete-suggestions", function (e) {
        console.log(e.suggestions);
      });

      document.addEventListener("getaddress-autocomplete-suggestions-failed", function (e) {
        console.log(e.status);
        console.log(e.message);
      });

      document.addEventListener("getaddress-autocomplete-address-selected", function (e) {
        console.log(e.address);
      });

      document.addEventListener("getaddress-autocomplete-address-selected-failed", function (e) {
        console.log(e.status);
        console.log(e.message);
      });
    };

    return () => {
      document.removeEventListener("getaddress-autocomplete-suggestions", () => {});
      document.removeEventListener("getaddress-autocomplete-suggestions-failed", () => {});
      document.removeEventListener("getaddress-autocomplete-address-selected", () => {});
      document.removeEventListener("getaddress-autocomplete-address-selected-failed", () => {});
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <label>First Address Line</label>
      <input id="textbox_id" type="text" />

      <label>Second Address Line</label>
      <input id="formatted_address_1" type="text" />

      <label>Third Address Line</label>
      <input id="formatted_address_2" type="text" />

      <label>Town</label>
      <input id="formatted_address_3" type="text" />

      <label>County</label>
      <input id="formatted_address_4" type="text" />

      <label>Postcode</label>
      <input id="postcode" type="text" />
    </div>
  );
};

export default AddressAutocomplete;
