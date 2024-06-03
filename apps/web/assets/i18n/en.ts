export default {
  labels: {
    managing: {
      title: 'Managing truck data',
      description: 'Our truck fleet management panel provides you with full control over your vehicles, helping to optimize logistical processes and increase the operational efficiency of your company.Ready for better fleet management?',
      panel: {
        heading: 'Trucks list'
      },
      form: {
        heading: {
          edit: 'Edit truck',
          add: 'Add truck',
        },
        placeholders: {
          code: 'Enter unique alpha numeric code...',
          name: 'Enter name...',
          description: ' Enter description...',
          status: 'Select status...'
        }
      },
      list: {
        empty: {
          heading: 'Your List is Empty',
          description: "It looks like you haven't added any items yet. Start adding items to see them here."
        },
        search: {
          description: "It looks like you haven't found any items. Please change your search criteria."
        },
        columns: {
          id: 'Id',
          code: 'Code',
          name: 'Name',
          status: 'Status'
        }
      },
    },
    statuses: {
      out_of_service: 'Out Of Service',
      loading: 'Loading',
      to_job: 'To Job',
      at_job: 'At Job',
      returning: 'Returning'
    },
    sort: {
      title: 'Sort by:',
      asc: 'Asc',
      desc: 'Desc'
    },
    filter: {
      title: 'Filter by:',
      input: {
        placeholder: 'Enter filter value...'
      },
    },
    code: 'Code',
    name: 'Name',
    status: 'Status',
    description: 'Description',
    column: 'Column',
    type: 'Type',
  },
  buttons: {
    managing: {
      add: 'add new truck',
      edit: 'Edit truck',
      remove: 'Remove truck'
    },
    filters: {
      remove: 'Remove all filters'
    },
    save: 'Save',
    sort: 'Sort',
    reset: 'Reset',
    filter: 'Filter',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  messages: {
    confirmed: 'Confirmed',
    error: 'Error',
    managing: {
      success: 'The correct record entry',
      add: {
        toast: {
          success: 'Entry correctly added',
        },
      },
      update: {
        toast: {
          success: 'Entry correctly updated',
        },
      },
      remove: {
        toast: {
          success: 'Entry correctly deleted',
        },
        heading: 'Are you sure you want to remove the selected truck from the list ?'
      },
      toast: {
        error: 'Something went wrong, please try again in a while'
      }
    }
  }
}