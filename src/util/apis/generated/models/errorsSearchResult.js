/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a ErrorsSearchResult.
 */
class ErrorsSearchResult {
  /**
   * Create a ErrorsSearchResult.
   * @member {boolean} [hasMoreResults]
   * @member {array} [errors]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorsSearchResult
   *
   * @returns {object} metadata of ErrorsSearchResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorsSearchResult',
      type: {
        name: 'Composite',
        className: 'ErrorsSearchResult',
        modelProperties: {
          hasMoreResults: {
            required: false,
            serializedName: 'hasMoreResults',
            type: {
              name: 'Boolean'
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HandledErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'HandledError'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorsSearchResult;
