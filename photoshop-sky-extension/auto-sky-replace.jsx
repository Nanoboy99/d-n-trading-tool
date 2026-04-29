#target photoshop
app.bringToFront();

function hasSelection(doc) {
    try {
        var b = doc.selection.bounds;
        return b && b.length === 4;
    } catch (e) {
        return false;
    }
}

function px(value) {
    return value.as("px");
}

function fitLayerToCanvas(doc, layer) {
    var docW = px(doc.width);
    var docH = px(doc.height);

    var b = layer.bounds;
    var layerW = px(b[2]) - px(b[0]);
    var layerH = px(b[3]) - px(b[1]);

    if (layerW <= 0 || layerH <= 0) {
        return;
    }

    var scale = Math.max((docW / layerW), (docH / layerH)) * 100;
    layer.resize(scale, scale, AnchorPosition.MIDDLECENTER);

    b = layer.bounds;
    var xOffset = ((px(b[0]) + px(b[2])) / 2) - (docW / 2);
    var yOffset = ((px(b[1]) + px(b[3])) / 2) - (docH / 2);
    layer.translate(-xOffset, -yOffset);
}

function createMaskFromSelection(revealSelection) {
    var idMk = charIDToTypeID("Mk  ");
    var desc = new ActionDescriptor();
    var idNw = charIDToTypeID("Nw  ");
    var idChnl = charIDToTypeID("Chnl");
    desc.putClass(idNw, idChnl);

    var idAt = charIDToTypeID("At  ");
    var ref = new ActionReference();
    var idChnl2 = charIDToTypeID("Chnl");
    var idChnl3 = charIDToTypeID("Chnl");
    var idMsk = charIDToTypeID("Msk ");
    ref.putEnumerated(idChnl2, idChnl3, idMsk);
    desc.putReference(idAt, ref);

    var idUsng = charIDToTypeID("Usng");
    var idUsrM = charIDToTypeID("UsrM");
    var idRvlS = charIDToTypeID("RvlS");
    var idHdSl = charIDToTypeID("HdSl");
    desc.putEnumerated(idUsng, idUsrM, revealSelection ? idRvlS : idHdSl);

    executeAction(idMk, desc, DialogModes.NO);
}

function main() {
    if (!app.documents.length) {
        alert("Vui lòng mở ảnh trước khi chạy script.");
        return;
    }

    var doc = app.activeDocument;
    if (!hasSelection(doc)) {
        alert("Không tìm thấy vùng chọn. Hãy tạo vùng chọn bầu trời rồi chạy lại script.");
        return;
    }

    var skyFile = File.openDialog("Chọn ảnh bầu trời thay thế", "Images:*.jpg;*.jpeg;*.png;*.tif;*.tiff;*.psd");
    if (!skyFile) {
        return;
    }

    var skyDoc = app.open(skyFile);
    skyDoc.activeLayer.duplicate(doc, ElementPlacement.PLACEATBEGINNING);
    skyDoc.close(SaveOptions.DONOTSAVECHANGES);

    app.activeDocument = doc;
    var skyLayer = doc.activeLayer;
    skyLayer.name = "Auto Sky Replacement";

    fitLayerToCanvas(doc, skyLayer);

    // Áp mask theo vùng chọn hiện có
    createMaskFromSelection(true);

    alert("Đã thay bầu trời xong. Bạn có thể tinh chỉnh thêm bằng Blend Mode/Opacity.");
}

main();
