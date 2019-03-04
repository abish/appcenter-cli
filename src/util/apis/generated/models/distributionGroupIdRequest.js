/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DistributionGroupIdRequest.
 */
class DistributionGroupIdRequest {
  /**
   * Create a DistributionGroupIdRequest.
   * @member {uuid} id The id of the distribution group
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupIdRequest
   *
   * @returns {object} metadata of DistributionGroupIdRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupIdRequest',
      type: {
        name: 'Composite',
        className: 'DistributionGroupIdRequest',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupIdRequest;
