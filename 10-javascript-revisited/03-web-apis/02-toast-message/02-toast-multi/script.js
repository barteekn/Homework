$(document).ready(function() {
    $("#btnSuccess").click(function() {
      createSuccessToast("Gratulacje! Wszystko działo poprawnie!");
    });
  
    $("#btnError").click(function() {
      createErrorToast("Opps! Coś poszło nie tak!");
    });
  });
  
  function createSuccessToast(toastMessage) {
    createToast(true, toastMessage);
  }
  
  function createErrorToast(toastMessage) {
    createToast(false, toastMessage);
  }
  
  function createToast(isSuccess, toastMessage) {
    var toastContainer = createToastContainer(isSuccess);
    createToastHeader(toastContainer, isSuccess);
    createToastContent(toastContainer, toastMessage);
    initToast(toastContainer);
    destroyToast(toastContainer);
  }
  
  function createToastContainer(isSuccess) {
    var toastContainer = $("<div></div>");
    toastContainer.addClass("toastContainer");
    if (isSuccess) {
      toastContainer.addClass("toastContainerSuccess");
    } else {
      toastContainer.addClass("toastContainerError");
    }
    return toastContainer;
  }
  
  function createToastHeader(toastContainer, isSuccess) {
    var toastHeader = $("<div></div>");
    toastHeader.addClass("toastHeader");
    toastHeader.html(isSuccess ? "Sukces" : "Bląd");
    toastContainer.append(toastHeader);
  }
  
  function createToastContent(toastContainer, toastMessage) {
    var toastContent = $("<div></div>");
    toastContent.addClass("toastContent");
    toastContent.html(toastMessage);
    toastContainer.append(toastContent);
  }
  
  function initToast(toastContainer) {
    toastContainer.hide(function() {
      $(document.body).append(toastContainer);
      toastContainer.fadeIn(500);
    });
  }
  
  function destroyToast(toastContainer) {
    setTimeout(function() {
      toastContainer.fadeOut(500, function() {
        toastContainer.remove();
      });
    }, 3000);
  }