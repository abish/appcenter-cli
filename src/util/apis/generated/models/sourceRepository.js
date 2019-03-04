/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The source repository
 *
 */
class SourceRepository {
  /**
   * Create a SourceRepository.
   * @member {string} [name] The repository name
   * @member {string} [cloneUrl] URL used to clone the repository
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceRepository
   *
   * @returns {object} metadata of SourceRepository
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceRepository',
      type: {
        name: 'Composite',
        className: 'SourceRepository',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          cloneUrl: {
            required: false,
            serializedName: 'clone_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceRepository;
